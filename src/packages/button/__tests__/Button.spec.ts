import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    console.log(wrapper.classes());
    expect(wrapper.classes().includes("bg-red-500")).toBe(true);
  });
});
