// this setupTests file runs before any test, need to set up enzyme adapter here
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
