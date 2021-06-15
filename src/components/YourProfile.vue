<template>
  <div style="position: absolute; margin: 0 auto;">
    <div style="width: 664px; background-color: white; border: 1px solid #D9D2E7; border-radius: 4px; padding: 32px;">
      <h4 style="align-text: left; font-family: 'Montserrat', sans-serif; font-weight: 700;">Your Profile</h4>
      <form @submit="checkForm" style="font-size: 15px;">
        <div style="padding-bottom: 32px;">
          <div style="display: flex;">
            <InputText :disabled="success" label="First name" v-model="first_name" :error="firstNameErrorMessage" style="margin-right: 8px;" />
            <InputText :disabled="success" label="Last name" v-model="last_name" :error="lastNameErrorMessage" help="we need your full name" style="margin-left: 8px;" />
          </div>
        </div>
        <div>
          <div style="display: flex; padding-bottom: 32px;">
            <InputText :disabled="success" label="Email address" help="we need your email" v-model="email_address" :error="emailAddressErrorMessage" />
          </div>
        </div>
        <div style="padding-bottom: 32px;">
          <div style="display: flex; padding-bottom: 8px;">
            <div style="flex: 1;">
              <label for="photo">Your photo (Recommended size 200px)</label>
              <div style="display: flex; margin-top: 8px;">
                <img :src="this.imageUrl" alt="User profile picture." style="height: 80px; width: 80px; border-radius: 50%; margin-right: 16px;">
                <div style="flex: 1; background-color: #F7F5FC; border-radius: 4px; display: flex; justify-content: center; align-items: center;">
                  <div style="background-color: white; margin: 7px 0px; border: 1px solid #D9D2E7; border-radius: 4px;">
                    <input :disabled="success" @change="onImageChange" id="photo" type="file" style="padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px; margin-left: 16px; display: none;">
                    <label for="photo" style="cursor: pointer; margin: 7px 15px; line-height: 26px; font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 14px;">Upload new image</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div @click="defaultImage" style="cursor: pointer; line-height: 27px; color: #E0004D; font-weight: 600;">
            Remove existing image
          </div>
        </div>
        <div>
          <div>
            <button :disabled="success" type="submit" style="cursor: pointer; border-width: 0; line-height: 24px; font-family: 'Montserrat', sans-serif; padding: 7px 16px; padding-bottom: 9px; background: linear-gradient(111.77deg, #E92A6C 0%, #2E008B 100%); color: white; font-weight: 700; border-radius: 4px; box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);" :style="[disabledButton]">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="success" style="display: flex; justify-content: center; margin-top: 32px; color: #53ce53; font-weight: 800; font-size: 32px;">
      Good job mate!
    </div>
  </div>
</template>

<script>

export default {
  name: 'YourProfile',
  components: {
  },
  data() {
    return {
      first_name: "Nikandros",
      last_name: "Mavroudakis",
      email_address: "mavroudakis.nikandros@gmail.com",
      errors: {
        first_name: false,
        last_name: false,
        email_address: false,
      },
      imageUrl: 'https://lh3.googleusercontent.com/proxy/rMWAzn7UtoaLiLjXSvXK4wEv8VpXeUE-ff9tyHO0qIwJU4_mWCtl1nnmFt0rHzsJtlc25tiFdU8HobnYU9iqvgDheHPAiIyOOXv_Hj5Vx7l2ygN9JcMOJhRdvmN0x2bpU6LwwYERvA2o',
      success: false,
    }
  },
  computed: {
    disabledButton() {
      return this.success ? { opacity: 0.7, cursor: 'default' } : {};
    },
    firstNameErrorMessage() {
      return this.errors.first_name ? "First name is wrong" : "";
    },
    lastNameErrorMessage() {
      return this.errors.last_name ? "Last name is wrong" : "";
    },
    emailAddressErrorMessage() {
      return this.errors.email_address ? "Email address is wrong" : "";
    },
  },
  methods: {
    defaultImage() {
      this.imageUrl = 'https://lh3.googleusercontent.com/proxy/rMWAzn7UtoaLiLjXSvXK4wEv8VpXeUE-ff9tyHO0qIwJU4_mWCtl1nnmFt0rHzsJtlc25tiFdU8HobnYU9iqvgDheHPAiIyOOXv_Hj5Vx7l2ygN9JcMOJhRdvmN0x2bpU6LwwYERvA2o';
    },
    onImageChange(e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
      e.target.value = '';
    },
    checkForm(e) {
      e.preventDefault();

      const { first_name, last_name, email_address } = this;

      this.errors.first_name = !this.validateAlpha(first_name);
      this.errors.last_name = !this.validateAlpha(last_name);
      this.errors.email_address = !this.validateAlpha(email_address);

      if (this.errors.first_name || this.errors.last_name || this.errors.email_address) {
        return;
      }

      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000);

    },
    between(test, small, big) {
      return test.length >= small && test.length <= big;
    },
    validateAlpha(test) {
      return this.between(test, 2, 255);
    },
    validateEmail(test) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(test) && this.validateAlpha(test);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
</style>
