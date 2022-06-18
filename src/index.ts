/**
 * @fileoverview Any todo comment must have an associated JIRA ticket
 * @author Dave Bernhard
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import requireIndex from 'requireindex';
import configs from './configs';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
const rules = requireIndex(__dirname + '/rules');

export { rules, configs };
