import { RouteComponentProps } from 'react-router'
import { match } from 'react-router-dom';
import { UnregisterCallback, Href } from 'history'

//This is to mock out the dependencies for react router
export function getMockRouterProps<P>(data: P) {

  const location = {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: {}
  };

  const props: RouteComponentProps<P> = {
    match: {
      isExact: true,
      params: data,
      path: "",
      url: ""
    },
    location: location,
    history: {
      length: 2,
      action: "POP",
      location: location,
      push: () => { },
      replace: () => { },
      go: (num) => { },
      goBack: () => { },
      goForward: () => { },
      block: (t) => {
        return Boolean;
      },
      createHref: (t) => {
        const Href = "";
        return Href;
      },
      listen: (t) => {
        return Boolean;
      }

    },
    staticContext: {
    }
  };


  return props;
}