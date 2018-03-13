<template>
  <div class="child-page contact">
    <!-- <h1 class="contact__header">Drop me a line</h1> -->
    <form @submit="validateForm" action="https://formspree.io/max.miracolo@gmail.com" method="POST" class="form" name="contactForm" novalidate>
      <input type="text" name="_gotcha" style="display:none" />
      <input type="hidden" name="_next" value="/thanks" />
      <label>
        <span class="form__label" :class="activateEmailLabel">
          Email <span class="error">{{ errors.email }}</span>
        </span>
        <input 
          type="email"
          name="email"
          class="input input--email"
          :class="emailClass"
          @keydown="errors.email = null"
          @focus="emailFocus=true"
          @blur="emailFocus=false"
          v-model="email"/>
      </label>
      <label>
        <span class="form__label" :class="activateMessageLabel">
          Message <span class="error">{{ errors.message }}</span>
        </span>
        <textarea 
          name="message"
          id="message"
          class="textarea"
          :class="messageClass"
          @keydown="errors.message = null"
          @focus="messageFocus=true"
          @blur="messageFocus=false"
          rows="1"
          v-model="message">
        </textarea>
      </label>
      <button type="submit" class="submit" :class="email && message ? 'active' : 'disabled'" >Send Message</button>
    </form>
  </div>
</template>

<script type="text/javascript">
  import autosize from 'autosize';
  export default {
    data() {
      return {
        messageFocus: false,
        emailFocus: false,
        email: '',
        message: '',
        errors: {}
      }
    },
    mounted() {
      autosize(document.getElementById('message'));
    },
    computed: {
      activateEmailLabel() {
        return this.emailFocus || this.email ? 'active' : 'inactive';
      },
      activateMessageLabel() {
        return this.messageFocus || this.message ? 'active' : 'inactive';
      },
      emailClass() {
        if(this.email && !this.errors.email) {
          return 'valid';
        } else if(this.errors.email) {
          return 'invalid';
        }
      },
      messageClass() {
        if(this.message && !this.errors.message) {
          return 'valid';
        } else if(this.errors.message) {
          return 'invalid';
        }
      }
    },
    methods: {
      validateForm(e) {
        this.errors = {};

        if(!this.email) {
          //no email
          this.errors.email = 'Please enter an email address.';
        } else if(this.email && !this.validEmail(this.email)) {
          //inavlid email
          this.errors.email = 'Please enter a valid email address.';
        }

        if(!this.message) {
          //no message
          this.errors.message = 'Please enter a message.';
        }

        if(this.errors.message || this.errors.email) {
          e.preventDefault();
        } else {
          return true;
        }
      },
      validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>

<style lang="scss" scoped>
  /////////////////////////////////////////
  //  IMPORTS
  /////////////////////////////////////////
  @import '../scss/globals.scss';


  /////////////////////////////////////////
  //  STYLING
  /////////////////////////////////////////
  .contact {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    justify-content: center;
    width: 100%;
  }

  .form {
    max-width: 600px;
    min-width: 300px;
    width: 40%;
  }

  label {
    display: block;
    position: relative;
  }

  .error {
    color: $red;
    font-size: 16px;
  }

  .form__label {
    margin: 0 5px 0 0;
    position: absolute;
    z-index: 1;
    @include transition( 200ms );

    &.inactive {
      bottom: 0;
      font-size: 30px;
      line-height: 1.2;
      padding: 15px;
    }

    &.active {
      bottom: 100%;
      font-size: 16px;
      left: 0;
      padding: 0 0 2px;
    }
  }

  .contact__header {
    text-transform: uppercase;
    text-align: left;
    @extend .heading-font;
  }

  label {
    color: $copycolor;
    margin-bottom: 40px;
    @extend .body-font;
  }
  
  .input,
  .textarea {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #ccc;
    box-sizing: border-box;
    display: block;
    font-size: 30px;
    margin: 0 0 20px;
    outline: none;
    position: relative;
    width: 100%;
    z-index: 2;
    @extend .body-font;
    @include transition( 300ms );

    &.input--email {
      margin: 0 0 20px;
    }

    &:focus {
      background: transparentize(#aaa, .9);
      border: 0;
      border-bottom: 2px solid #aaa;
    }

    &.valid {
      background-color: transparentize($green, .9);
      border-bottom: 2px solid $green;
    }

    &.invalid {
      background-color: transparentize($red, .9);
      border-bottom: 2px solid $red;
    }
  }

  .input {
    line-height: 1.2;
    padding: 15px;
  }

  .textarea {
    padding: 15px;
    resize: none;
  }

  .submit {
    border: 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 30px;
    letter-spacing: 1px;
    float: right;
    outline: none;
    position: relative;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 1;
    @extend .heading-font;

      &.active {
        background-color: $blue;
      }

      &.disabled {
        background-color: #aaa;
        cursor: not-allowed;
      }

      &:hover:not(.disabled) {
        color: #fff;
        &::before {
          top: -5px;
        }
      }

      &::before {
        background-color: $green;
        bottom: -5px;
        content: '';
        left: -5px;
        position: absolute;
        right: -5px;
        top: calc(100% + 5px);
        z-index: -1;
        @include transition( 100ms cubic-bezier(.4, 1, .8, 1.3) );
      }
  }
</style>
