<template>
  <div>
    <amplify-authenticator username-alias="email">
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      ></amplify-sign-up>
      <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
      <div>
        <h1 v-if="user">Hola, {{ user.username }}!</h1>
        <amplify-sign-out></amplify-sign-out>
      </div>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      formFields: [
        {
          type: "email",
          label: "Email (custom)",
          placeholder: "Email placeholder (custom)",
          required: true,
        },
        {
          type: "password",
          label: "Password (custom)",
          placeholder: "Password placeholder (custom)",
          required: true,
        },
      ],
    };
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
};
</script>

<style></style>
