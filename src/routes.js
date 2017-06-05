import FunctionalPropsContainer from './demos/FunctionalPropsContainer';
import ClassPropsContainer from './demos/ClassPropsContainer';
import PassingData from './demos/PassingData';
import Transactions from './tx/Transactions';
import Demos from './Demos';
import ReduxCounter from './demos/ReduxCounter';
import JSXExamples from './demos/JSXExamples';
import TreeComponent from './demos/TreeComponent';
import ConditionalDemo from './demos/ConditionalDemo';

const routes = [
  {
    path     : '/tx',
    component: Transactions,
  },
  {
    path     : '/demos',
    component: Demos,
    routes   : [
      {
        path     : '/demos/functional-props',
        component: FunctionalPropsContainer,
        label: 'Functional Component with props'
      },
      {
        path     : '/demos/class-props',
        component: ClassPropsContainer,
        label: 'Class Component with props'
      },
      {
        path     : '/demos/passing-data',
        component: PassingData,
        label: 'Passing Data'
      },
      {
        path: '/demos/redux-counter',
        component: ReduxCounter,
        label: 'Incremental counter with Redux'
      },
      {
        path: '/demos/jsx-examples',
        component: JSXExamples,
        label: 'JSX Examples'
      },
      {
        path: '/demos/tree-component',
        component: TreeComponent,
        label: 'TreeComponent'
      },
      {
        path: '/demos/conditional-demo',
        component: ConditionalDemo,
        label: 'Using components conditionally'
      }
    ]
  }
];

export default routes;