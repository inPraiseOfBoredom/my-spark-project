import { shallowMount, createLocalVue } from '@vue/test-utils'
import Register from '@/views/Register.vue'
import VueRouter from "vue-router";



describe('Register.vue', () => {
  it('should render the Spark Headline', () => {
    

    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const router = new VueRouter();


    const wrapper = shallowMount(Register, {
      localVue,
      router
    });
   const h1 = wrapper.find('h1');

    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe("Spark");});
  
    it('should start validating on blur', () => {
    
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();


    const wrapper = shallowMount(Register, {
      localVue,
      router
    });

    expect((wrapper.vm as any).emailError).toBe("");

   const emailInput =  wrapper.find("#email-address");
   expect(emailInput.exists()).toBe(true);
   emailInput.setValue("myemail");

   emailInput.trigger('blur');

     expect((wrapper.vm as any).emailError).toBe("Please insert a valid email address");

  });})
