<template>
  <div style="height: 518px; width: 664px; margin: 0 auto; background-color: white; border: 1px solid #D9D2E7; border-radius: 4px; padding: 32px;">
    <h4 style="align-text: left; font-family: 'Montserrat', sans-serif; font-weight: 700;">Your Profile</h4>
    <div style="font-size: 15px;">
      <div style="padding-bottom: 32px;">
        <div style="display: flex;">
          <div style="flex: 1; padding-right: 8px;">
            <label for="first_name" style="margin-bottom: 4px;">First name</label>
            <input id="first_name" type="text" style="margin-top: 4px; width: 100%; padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px;">
          </div>
          <div style="flex: 1; padding-left: 8px;">
            <label for="last_name" style="margin-bottom: 4px;">Last name</label>
            <br />
            <input id="last_name" type="text" style="margin-top: 4px; width: 100%; padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px;">
          </div>
        </div>
      </div>
      <div>
        <div style="display: flex; padding-bottom: 32px;">
          <div style="flex: 1;">
            <label for="email_address" style="margin-bottom: 4px;">Email Address</label>
            <input id="email_address" type="text" style="margin-top: 4px; width: 100%; padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px;">
          </div>
        </div>
      </div>
      <div style="padding-bottom: 32px;">
        <div style="display: flex; padding-bottom: 8px;">
          <div style="flex: 1;">
            <label for="photo">Your photo (Recommended size 200px)</label>
            <div style="display: flex;">
              <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="User profile picture." style="height: 80px; width: 80px; border-radius: 50%; margin-right: 16px;">
              <div style="flex: 1; background-color: #F7F5FC; border-radius: 4px; display: flex; justify-content: center; align-items: center;">
                <div style="background-color: white; margin: 7px 0px; border: 1px solid #D9D2E7; border-radius: 4px;">
                  <input id="photo" type="file" style="padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px; margin-left: 16px; display: none;">
                  <label for="photo" style="cursor: pointer; margin: 7px 15px; line-height: 26px; font-family: 'Montserrat', sans-serif; font-weight: 400;">Upload new image</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="cursor: pointer; line-height: 27px; color: #E0004D; font-weight: 600;">
          Remove existing image
        </div>
      </div>
      <div style="padding-bottom: 32px;">
        <div>
          <button style="cursor: pointer; border-width: 0; line-height: 24px; font-family: 'Montserrat', sans-serif; padding: 7px 16px; padding-bottom: 9px; background: linear-gradient(111.77deg, #E92A6C 0%, #2E008B 100%); color: white; font-weight: 700; border-radius: 4px; box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'YourProfile',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
</style>
