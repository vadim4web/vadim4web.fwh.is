<script setup>
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const { emailjsServiceId, emailjsTemplateId, emailjsUserKey } = useRuntimeConfig().public

const submitForm = async () => {
	const text = `
        Name: ${name.value}
        Email: ${email.value}
        Subject: ${subject.value}
        Message: ${message.value}
      `

	try {
		const templateParams = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: text.trim(),
		}

		const response = await emailjs.send(
			emailjsServiceId,
			emailjsTemplateId,
			templateParams,
			{
				publicKey: emailjsUserKey,
			}
		)
		console.log('Email sent successfully!', response)
	} catch (error) {
		console.error('Error sending email:', error)
	}

	name.value = ''
	email.value = ''
	subject.value = ''
	message.value = ''
}
</script>

<template>
	<main class="flex-col">
		<PageHeader head-key="contactH21" text-key="contactT1" />

		<div class="flex-col">
			<div class="grid-text-form">
				<h2 class="h2">
					{{ $t('contactH221') }}<br />
					{{ $t('contactH222') }}<br />
					{{ $t('contactH223') }}
				</h2>

				<form @submit.prevent="submitForm">
					<div class="form flex-col card-back rel">
						<label class="rel" :data-text="$t('name')">
							<input
								v-model="name"
								aria-label="name-input"
								autocomplete="name"
								required
								type="text"
							/>
						</label>

						<label class="rel" :data-text="$t('email')">
							<input
								v-model="email"
								aria-label="email-input"
								required
								type="email"
							/>
						</label>

						<label class="rel" :data-text="$t('project')">
							<input
								v-model="subject"
								aria-label="subject-input"
								required
								type="text"
							/>
						</label>

						<label class="rel" :data-text="$t('comment')">
							<textarea v-model="message" />
						</label>
					</div>

					<div class="button-wrapper rel">
						<InteractiveButton
							:bg="'var(--accent50)'"
							:border-radius="'1.75rem'"
							class="font-variant abs"
							:font-size="'2.1rem'"
							:padding="'0'"
							tabindex="0"
						>
							{{ $t('send') }}
						</InteractiveButton>
					</div>
				</form>
			</div>
		</div>

		<div class="laptop w100 br1"></div>

		<div class="address w100">
			<h4 class="h4">
				<a class="link" href="tel:+380933789883" :title="$t('callMe')">
					+380-933-789-883
				</a>
			</h4>

			<h4 class="h4">
				<a class="link" href="https://t.me/vadim4web" :title="$t('chatMe')">
					@vadim4web
				</a>
			</h4>

			<h4 class="h4">
				<a
					class="link"
					:href="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
						$t('emailSubject')
					)}`"
					target="_blank"
					:title="$t('emailMe')"
				>
					vadim4web@gmail.com
				</a>
			</h4>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.grid-text-form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0rem;
	padding: 9.5rem 0 7.25rem 0;
}

.form {
	gap: 3.5rem;
	padding: 3rem 1.5rem 1.5rem;
	border-radius: 1.75rem;
	font-size: 1.5rem;
	color: var(--color0);

	label {
		background: transparent !important;

		&::before {
			content: attr(data-text);
			top: 0;
			left: 0;
			width: 5rem;
			height: 2rem;
			line-height: 1.5rem;
		}
	}
}

*:focus {
	font-size: 1.5rem;
	outline: none;
}

.form *:not([type='submit']) {
	display: inline-flex;
	align-items: flex-end;
	overflow: hidden;
	width: 100%;
	height: 5rem;
	background: transparent !important;
	border-width: 0.125rem;
	border-color: transparent transparent var(--color2) transparent;
	color: var(--color0);

	&:focus {
		outline: none;
		border: none none auto none;
	}

	input {
		padding: 2.5rem 0 1rem 0;
	}

	textarea {
		padding: 2rem 0 0rem 0;
	}

	input,
	textarea {
		font-size: 1.5rem;

		&:not(:focus) {
			font-weight: 500;
		}

		&:focus {
			font-weight: 400;
			font-style: italic;
		}
	}
}

.button-wrapper {
	width: 14rem;
	height: 3.5rem;
}

input[type='submit'],
button {
	bottom: -1.5rem;
	width: 14rem;
	height: 3.5rem;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	background-clip: text !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: var(--color0) !important;
	transition: background-color 5000s;
	font-size: 1.5rem;
}

textarea {
	resize: none;
	font-size: 1.5rem;
}

.laptop {
	height: 55.5%;
	background-image: url('@/assets/img/laptop.webp');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	aspect-ratio: 1148 / 636;
	margin-bottom: 6.25rem;
}

.address {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-bottom: 10rem;

	& :nth-child(2) {
		justify-self: center;
	}

	& :last-child {
		justify-self: end;
	}

	.link {
		padding: 0.5rem;
		margin: -0.5rem 0;
	}
}
</style>
