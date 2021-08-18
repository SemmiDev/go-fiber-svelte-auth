import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, h as goto, j as element, t as text, k as space, l as claim_element, m as children, f as claim_text, c as detach_dev, p as claim_space, q as attr_dev, r as add_location, b as insert_dev, u as append_dev, w as set_input_value, x as listen_dev, y as prevent_default, n as noop, z as run_all } from './client.3f0292f0.js';

/* src/routes/register.svelte generated by Svelte v3.35.0 */
const file = "src/routes/register.svelte";

function create_fragment(ctx) {
	let form;
	let h1;
	let t0;
	let t1;
	let input0;
	let t2;
	let input1;
	let t3;
	let input2;
	let t4;
	let button;
	let t5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			h1 = element("h1");
			t0 = text("Please register");
			t1 = space();
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			input2 = element("input");
			t4 = space();
			button = element("button");
			t5 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			h1 = claim_element(form_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Please register");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				class: true,
				placeholder: true,
				required: true
			});

			t2 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t3 = claim_space(form_nodes);

			input2 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t4 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "h3 mb-3 fw-normal");
			add_location(h1, file, 23, 2, 452);
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			add_location(input0, file, 25, 2, 506);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "Email");
			input1.required = true;
			add_location(input1, file, 27, 2, 586);
			attr_dev(input2, "type", "password");
			attr_dev(input2, "class", "form-control");
			attr_dev(input2, "placeholder", "Password");
			input2.required = true;
			add_location(input2, file, 35, 2, 703);
			attr_dev(button, "class", "w-100 btn btn-lg btn-success");
			attr_dev(button, "type", "submit");
			add_location(button, file, 43, 2, 829);
			add_location(form, file, 22, 0, 409);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, h1);
			append_dev(h1, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*email*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, input2);
			set_input_value(input2, /*password*/ ctx[2]);
			append_dev(form, t4);
			append_dev(form, button);
			append_dev(button, t5);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}

			if (dirty & /*email*/ 2 && input1.value !== /*email*/ ctx[1]) {
				set_input_value(input1, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 4 && input2.value !== /*password*/ ctx[2]) {
				set_input_value(input2, /*password*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Register", slots, []);
	let name = "", email = "", password = "";

	const submit = async () => {
		await fetch("http://localhost:8080/api/v1/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, password })
		});

		await goto("/login");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Register> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(2, password);
	}

	$$self.$capture_state = () => ({ goto, name, email, password, submit });

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("email" in $$props) $$invalidate(1, email = $$props.email);
		if ("password" in $$props) $$invalidate(2, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		email,
		password,
		submit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});
	}
}

export default Register;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuODVkZGM4ODMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tIFwiQHNhcHBlci9hcHAubWpzXCI7XG5cbiAgbGV0IG5hbWUgPSBcIlwiLFxuICAgIGVtYWlsID0gXCJcIixcbiAgICBwYXNzd29yZCA9IFwiXCI7XG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9yZWdpc3RlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGdvdG8oXCIvbG9naW5cIik7XG4gIH07XG48L3NjcmlwdD5cblxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtzdWJtaXR9PlxuICA8aDEgY2xhc3M9XCJoMyBtYi0zIGZ3LW5vcm1hbFwiPlBsZWFzZSByZWdpc3RlcjwvaDE+XG5cbiAgPGlucHV0IGJpbmQ6dmFsdWU9e25hbWV9IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgcmVxdWlyZWQgLz5cblxuICA8aW5wdXRcbiAgICBiaW5kOnZhbHVlPXtlbWFpbH1cbiAgICB0eXBlPVwiZW1haWxcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICByZXF1aXJlZFxuICAvPlxuXG4gIDxpbnB1dFxuICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfVxuICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgIHJlcXVpcmVkXG4gIC8+XG5cbiAgPGJ1dHRvbiBjbGFzcz1cInctMTAwIGJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0F5QnFCLEdBQUk7OztxQ0FHVCxHQUFLOzs7d0NBUUwsR0FBUTs7Ozs7Ozs7OzsyREFkUSxHQUFNOzs7Ozs7O3VEQUdqQixHQUFJO3FDQUFKLEdBQUk7Ozt5REFHVCxHQUFLO3NDQUFMLEdBQUs7OzsrREFRTCxHQUFRO3lDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBakNsQixJQUFJLEdBQUcsRUFBRSxFQUNYLEtBQUssR0FBRyxFQUFFLEVBQ1YsUUFBUSxHQUFHLEVBQUU7O09BRVQsTUFBTTtRQUNKLEtBQUssQ0FBQyx1Q0FBdUM7R0FDakQsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQUksY0FBYyxFQUFFLGtCQUFrQjtHQUM3QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FDbEIsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFROzs7UUFJTixJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7OztFQU9GLElBQUk7Ozs7O0VBR1QsS0FBSzs7Ozs7RUFRTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
