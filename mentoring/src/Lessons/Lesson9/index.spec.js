import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Interstellar, DangerHtml } from ".";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("base tests", () => {
  test(`Should have danger`, () => {
    const wrapper = shallow(<Interstellar blackHoleDistance={50} />);
    expect(wrapper.text()).toEqual("DANGER");
  });

  test(`Should have no danger`, () => {
    const wrapper = shallow(<Interstellar blackHoleDistance={2000} />);
    expect(wrapper.text()).toEqual("");
  });

  test(`Should have no danger`, () => {
    const wrapper = render(<Interstellar blackHoleDistance={4000} />);
    expect(wrapper.text()).toEqual("");
  });

  test(`Should have no danger`, () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<Interstellar onJump={mockFunction} />);

    act(() => {
      wrapper.find(".interstellar-container__ship").first().invoke("onClick")({
        test: 1,
      });
    });
    expect(mockFunction).toHaveBeenCalledWith(1);
  });

  test(`Should have no danger`, () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<Interstellar onJump={mockFunction} />);

    act(() => {
      wrapper.find(".interstellar-container__ship").first().invoke("onClick")({
        test: 1,
      });
    });
    expect(mockFunction).toHaveBeenCalledWith(1);
  });
});

describe("DOM tests", () => {
  test(`Should have Text after mount`, () => {
    const wrapper = mount(<DangerHtml content={"<div>Text</div>"} />);

    expect(wrapper.text()).toEqual("Text");
  });
  test(`Should have no text on shallow test`, () => {
    const wrapper = shallow(<DangerHtml content={"<div>Text</div>"} />);

    expect(wrapper.text()).toEqual("");
  });
});
