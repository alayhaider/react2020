# Why we need a state management tool
In typical React, the way to handle data between disconnected components is through prop drilling. Since there is no global state that components can access if, for instance, you want to pass data from a top-level component to a fifth-level component, you’ll have to pass the data as a prop on each level of the tree until you get to your desired component.

This results in writing a ton of extra code, and giving components properties that they will never use also affects their architectural design.

In order to solve this problem, we needed a way to provide a global state that all components, no matter how deeply nested they are, could access.

By solving this, Redux — an open-source JavaScript library for managing application state — became the go-to solution for React developers.

