import React from 'react';

const FunctionalComponent = (props) => (
    <div>Functional Component</div>
);
export default FunctionalComponent;

/**
 * Functional Component: If you do not use a lifecycle API and state, 
 * and just pass props into the view, you can use a FunctionalComponent.
 * 
 * Advantages of using Functional Component:
 * - Easy to create a component
 * - Good performance in the first mount for 7 to 11 percentages. (Refrenced by https://github.com/missive/functional-components-benchmark)
 * 
 * Functional Component to use when:
 * - Presentation Component commonly be used by Functional Component
 * 
 * Referenced:
 * [ReactJS]강좌:함수형 컴포넌트(Functional Component): https://velopert.com/2994
 */