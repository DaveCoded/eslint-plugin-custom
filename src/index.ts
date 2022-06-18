/**
 * @fileoverview Any todo comment must have an associated JIRA ticket
 * @author Dave Bernhard
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import configs from './configs';
import { rule } from '../src/rules/todo-jira-ticket';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = {
  'todo-jira-ticket': rule,
};

export { rules, configs };
