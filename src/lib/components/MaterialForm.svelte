<script>
	import { FloatingLabelInput } from 'flowbite-svelte';
</script>

<form>
	<div class="grid gap-6 mb-6 md:grid-cols-6">
		<div class="col-span-6 md:col-span-3">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				name="firstName"
				type="text"
				label="First Name *"
			/>
		</div>
		<div class="col-span-6 md:col-span-3">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				name="lastName"
				type="text"
				label="Last Name *"
			/>
		</div>
	</div>
	<div class="grid gap-6 mb-6 md:grid-cols-6">
		<div class="col-span-6 md:col-span-3">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				name="email"
				type="text"
				label="Email *"
			/>
		</div>
		<div class="col-span-6 md:col-span-3">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				name="jobTitle"
				type="text"
				label="Job Title"
			/>
		</div>
	</div>
	<div class="grid gap-6 mb-6 md:grid-cols-6">
		<div class="col-span-6 md:col-span-3">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				name="phone"
				label="Phone Number"
				type="tel"
				placeholder="123-456-7890"
				pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			/>
		</div>
		<div class="col-span-6 md:col-span-2">
			<FloatingLabelInput
				classInput="h-14 focus:ring-4 focus:ring-primary-50 text-neutral-700 border-neutral-300 placeholder:text-neutral-300"
				classLabel="text-neutral-600"
				style="outlined"
				type="text"
				name="extension"
				label="Extension"
				placeholder="1234"
			/>
		</div>
	</div>
</form>
