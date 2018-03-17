import { fullName } from './nameHelper';

const hello = (name, lastName) => `Hello World ${ fullName(name, lastName) }`;

export default hello;
