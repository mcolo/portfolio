<template>
	<div class="contact">
		<!-- <h1 class="contact__header">Drop me a line</h1> -->
		<form @submit.prevent="validateForm" action="https://formspree.io/max.miracolo@gmail.com" method="POST" class="form" name="contactForm">
			<input type="text" name="_gotcha" style="display:none" />
			<input type="hidden" name="_next" value="/thanks" />
			<label>
				<span class="form__label" :class="activateEmailLabel">Email</span>
				<input 
					type="email"
					name="email"
					class="input input--email"
					@focus="emailFocus=true"
					@blur="emailFocus=false"
					v-model="email"/>
			</label>
			<label>
				<span class="form__label" :class="activateMessageLabel">Message</span>
				<textarea 
					name="message"
					id="message"
					class="textarea"
					@focus="messageFocus=true"
					@blur="messageFocus=false"
					rows="1"
					v-model="message">
				</textarea>
			</label>
			<button type="submit" class="submit">Send Message</button>
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
				message: ''
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
			}
		},
		methods: {
			validateForm() {
				return (this.email && this.message);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.contact {
		//background-color: #eee;
		//border-radius: 6px;
		//border: 1px solid #ddd;
		/*box-sizing: border-box;
		margin: 50px auto 0;
		max-width: 600px;
		min-width: 300px;
		padding: 20px;
		width: 40%;*/

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 60px);
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

	.form__label {
		position: absolute;
		transition: 200ms;
		z-index: 1;

		&.inactive {
			bottom: 0;
			font-size: 30px;
			line-height: 1.2;
			padding: 15px;
		}

		&.active {
			bottom: 100%;
			left: 0;
			font-size: 16px;
			padding: 0 0 2px;
		}
	}

	.contact__header {
		font-family: 'Yanone Kaffeesatz', sans-serif;
		text-transform: uppercase;
		text-align: left;
	}

	label {
		font-family: 'Lato', sans-serif;
		margin-bottom: 40px;
	}
	
	.input,
	.textarea {
		border: 0;
		border-bottom: 2px solid #ccc;
		//border-radius: 4px;
		box-sizing: border-box;
		display: block;
		font-family: 'Lato', sans-serif;
		font-size: 30px;
		margin: 0 0 20px;
		outline: none;
		position: relative;
		transition: 300ms;
		width: 100%;

		&.input--email {
			margin: 0 0 20px;
		}

		&:focus {
			border: 0;
			border-bottom: 2px solid #2ab688;
			background-color: transparentize(#2ab688, .9);
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

	/*.submit {
		background-color: #0a9ddf;
		border: 0;
		border-radius: 4px;
		cursor: pointer;
		color: #fff;
		font-family: 'Yanone Kaffeesatz', sans-serif;
		letter-spacing: 1px;
		line-height: 40px;
		padding: 0 20px;
		text-transform: uppercase;
		transition: 100ms;

		&:hover {
			background-color: darken(#0a9ddf, 10%);
		}
	} */


	.submit {
		border: 0;
		background-color: #0a9ddf;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: 'Yanone Kaffeesatz', sans-serif;
		font-size: 30px;
		letter-spacing: 1px;
		//margin: 0 0 0 5px;
		float: right;
		position: relative;
		padding: 5px 10px;
		text-decoration: none;
		text-transform: uppercase;
		z-index: 1;

			&:hover{
				color: #fff;
				&::before {
					top: -5px;
				}
			}

			&::before {
				background-color: #2ab688 /*darken(#0a9ddf, 20%)*/;
				bottom: -5px;
				content: '';
				left: -5px;
				right: -5px;
				top: calc(100% + 5px);
				position: absolute;
				transition: 100ms cubic-bezier(.4, 1, .8, 1.3);
				z-index: -1;
			}
	}
</style>
