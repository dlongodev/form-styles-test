<script>
	import { Label, Input } from 'flowbite-svelte';
</script>

<form>
	<div class="grid gap-6 mb-6 md:grid-cols-6">
		<div class="col-span-6 md:col-span-3">
			<Label for="firstName" class="mb-2">First name *</Label>
			<Input
				class="bg-white focus:ring-4 focus:ring-primary-100"
				type="text"
				id="firstName"
				required
			/>
		</div>
		<div class="col-span-6 md:col-span-3">
			<Label for="lastName" class="mb-2">Last name *</Label>
			<Input
				class="bg-white focus:ring-4 focus:ring-primary-100"
				type="text"
				id="lastName"
				required
			/>
		</div>
		<div class="col-span-6 md:col-span-3">
			<Label for="email" class="mb-2">Email *</Label>
			<Input class="bg-white focus:ring-4 focus:ring-primary-100" type="text" id="email" required />
		</div>
		<div class="col-span-6 md:col-span-3">
			<Label for="jobTitle" class="mb-2">Job Title</Label>
			<Input
				class="bg-white focus:ring-4 focus:ring-primary-100"
				type="url"
				id="jobTitle"
				required
			/>
		</div>
		<div class="col-span-6 md:col-span-3">
			<Label for="phone" class="mb-2">Phone number</Label>
			<Input
				class="bg-white focus:ring-4 focus:ring-primary-100"
				type="tel"
				id="phone"
				placeholder="123-456-7890"
				pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			/>
		</div>
		<div class="col-span-6 md:col-span-1">
			<Label for="extension" class="mb-2">Extension</Label>
			<Input
				class="bg-white focus:ring-4 focus:ring-primary-100"
				type="text"
				id="extension"
				placeholder="1234"
			/>
		</div>
	</div>
</form>
