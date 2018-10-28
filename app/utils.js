import React from 'react';

import { Spinner } from 'native-base';
import { camelizeKeys } from 'humps';
import hoistNonReactStatics from 'hoist-non-react-statics';


export const fetch = async (url, options = {}) => {
  const response = await global.fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();

  if ([200, 201].includes(response.status)) {
    data = camelizeKeys(data);
  }

  return {
    data,
    response,
  };
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withDataLoader(handleLoad) {
  return (SourceComponent) => {
    class WrappedComponent extends React.PureComponent {
      constructor(props) {
        super(props);

        const { navigation } = props;
        this.state = {
          isLoading: true,
        };
        this.didBlurSubscription = navigation.addListener('didFocus', this._handleFocuse);
      }

      componentWillUnmount() {
        this.didBlurSubscription.remove();
      }

      _handleFocuse = async () => {
        await handleLoad(this.props);
        this.setState({
          isLoading: false,
        });
      };

      render() {
        const { isLoading } = this.state;
        if (isLoading) {
          return <Spinner />;
        }

        return <SourceComponent {...this.props} />;
      }
    }
    hoistNonReactStatics(WrappedComponent, SourceComponent);
    WrappedComponent.displayName = `WithLoader(${getDisplayName(WrappedComponent)})`;

    return WrappedComponent;
  };
}
