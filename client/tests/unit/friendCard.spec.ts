import { shallowMount } from "@vue/test-utils";
import FriendCard from "@/components/FriendCard.vue";

describe("Test Name prop in FriendCard", () => {
  it("renders firstName and lastName when passed", () => {
    const friend = {
      firstName: "Bob",
      lastName: "Ross",
    }
    const wrapper = shallowMount(FriendCard, {
      propsData: { friend },
    });
    expect(wrapper.text()).toMatch(friend.firstName);
    expect(wrapper.text()).toMatch(friend.lastName);
  });
});
