import { createSelector } from 'reselect';
import selectLoginContainer from '../LoginContainer/selectors';

/** Direct selector */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  selectLoginContainer(),
  (substate, loginSubstate) => Object.assign(substate.toJS(), loginSubstate)
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
