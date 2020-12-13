import React from 'react'
import { shallow, configure } from "enzyme";
import LoginPage from "./../../pages/login";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ Adapter: new Adapter() });
