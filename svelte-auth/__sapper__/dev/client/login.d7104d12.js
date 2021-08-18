import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, h as goto, j as element, t as text, k as space, l as claim_element, m as children, f as claim_text, c as detach_dev, p as claim_space, q as attr_dev, r as add_location, b as insert_dev, u as append_dev, w as set_input_value, x as listen_dev, y as prevent_default, n as noop, z as run_all } from './client.75d17255.js';

/* src/routes/login.svelte generated by Svelte v3.35.0 */
const file = "src/routes/login.svelte";

function create_fragment(ctx) {
	let form;
	let h1;
	let t0;
	let t1;
	let input0;
	let t2;
	let input1;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			h1 = element("h1");
			t0 = text("Please Sign in");
			t1 = space();
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Sign in");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			h1 = claim_element(form_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Please Sign in");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
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
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "h3 mb-3 fw-normal");
			add_location(h1, file, 22, 2, 445);
			attr_dev(input0, "type", "email");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "Email");
			input0.required = true;
			add_location(input0, file, 24, 2, 498);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "Password");
			input1.required = true;
			add_location(input1, file, 32, 2, 615);
			attr_dev(button, "class", "w-100 btn btn-lg btn-success");
			attr_dev(button, "type", "submit");
			add_location(button, file, 40, 2, 741);
			add_location(form, file, 21, 0, 402);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, h1);
			append_dev(h1, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
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
	validate_slots("Login", slots, []);
	let email = "", password = "";

	const submit = async () => {
		await fetch("http://localhost:8080/api/v1/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ email, password })
		});

		await goto("/");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({ goto, email, password, submit });

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, submit, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZDcxMDRkMTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tIFwiQHNhcHBlci9hcHAubWpzXCI7XG5cbiAgbGV0IGVtYWlsID0gXCJcIixcbiAgICBwYXNzd29yZCA9IFwiXCI7XG5cbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGdvdG8oXCIvXCIpO1xuICB9O1xuPC9zY3JpcHQ+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17c3VibWl0fT5cbiAgPGgxIGNsYXNzPVwiaDMgbWItMyBmdy1ub3JtYWxcIj5QbGVhc2UgU2lnbiBpbjwvaDE+XG5cbiAgPGlucHV0XG4gICAgYmluZDp2YWx1ZT17ZW1haWx9XG4gICAgdHlwZT1cImVtYWlsXCJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgcmVxdWlyZWRcbiAgLz5cblxuICA8aW5wdXRcbiAgICBiaW5kOnZhbHVlPXtwYXNzd29yZH1cbiAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICByZXF1aXJlZFxuICAvPlxuXG4gIDxidXR0b24gY2xhc3M9XCJ3LTEwMCBidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlNpZ24gaW48L2J1dHRvbj5cbjwvZm9ybT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBeUJnQixHQUFLOzs7d0NBUUwsR0FBUTs7Ozs7Ozs7OzJEQVpRLEdBQU07Ozs7Ozs7eURBSXRCLEdBQUs7c0NBQUwsR0FBSzs7OytEQVFMLEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E5QmxCLEtBQUssR0FBRyxFQUFFLEVBQ1osUUFBUSxHQUFHLEVBQUU7O09BRVQsTUFBTTtRQUNKLEtBQUssQ0FBQyxvQ0FBb0M7R0FDOUMsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQUksY0FBYyxFQUFFLGtCQUFrQjtHQUM3QyxXQUFXLEVBQUUsU0FBUztHQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FDbEIsS0FBSyxFQUNMLFFBQVE7OztRQUlOLElBQUksQ0FBQyxHQUFHOzs7Ozs7Ozs7O0VBUUYsS0FBSzs7Ozs7RUFRTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
