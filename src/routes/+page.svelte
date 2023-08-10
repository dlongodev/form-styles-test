<script>
	import BasicForm from '$lib/components/BasicForm.svelte';
	import { AccordionItem, Accordion, DropdownDivider } from 'flowbite-svelte';
</script>

<div class="bg-white p-8 mb-8 shadow-lg rounded-2xl">
	<Accordion flush multiple>
		<AccordionItem
			open={true}
			class="py-1"
			borderClass="border-neutral-400"
			borderBottomClass="border-b-0"
		>
			<DropdownDivider class="mb-4 mt-0" />
			<span slot="header" class="text-xl font-semibold text-neutral-900 font-mulish"
				>Basic Form Design</span
			>
			<div class="grid grid-cols-1 md:grid-cols-6 gap-2">
				<div class="hidden md:block md:col-span-1 lg:col-span-2" />
				<div class="col-span-1 md:col-span-5 lg:col-span-4">
					<BasicForm />
				</div>
			</div></AccordionItem
		>
	</Accordion>
</div>
