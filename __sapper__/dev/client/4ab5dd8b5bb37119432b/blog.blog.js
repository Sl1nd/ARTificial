(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog"],{

/***/ "./src/routes/blog/index.svelte":
/*!**************************************!*\
  !*** ./src/routes/blog/index.svelte ***!
  \**************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/blog/index.svelte generated by Svelte v3.23.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];
const file = "src/routes/blog/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1frg2tf-style";
	style.textContent = "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHtwYXJhbXMgLCBxdWVyeX0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgYmxvZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKHBvc3RzID0+IHtcblx0XHRcdHJldHVybiB7IHBvc3RzIH07XG5cdFx0fSk7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3RzO1xuXG5cdGV4cG9ydCBsZXQgdGVzdCA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnaGVsbG8gdGVzdCcpXG5cdFx0XG5cdFx0dGhpcy5mZXRjaChgYmxvZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKHBvc3RzID0+IHtcblx0XHRcdFxuXHRcdFx0Y29uc29sZS5sb2coeyBwb3N0cyB9KVxuXHRcdH0pO1xuXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5CbG9nPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5SZWNlbnQgcG9zdHM8L2gxPlxuPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4ge2NvbnNvbGUubG9nKCd0ZXN0Jyk7dGVzdCgpO319PiBDbGljayBtZTwvYnV0dG9uPlxuPHVsPlxuXHR7I2VhY2ggcG9zdHMgYXMgcG9zdH1cblx0XHQ8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cblx0XHQ8bGk+PGEgcmVsPSdwcmVmZXRjaCcgaHJlZj0nYmxvZy97cG9zdC5zbHVnfSc+e3Bvc3QudGl0bGV9PC9hPjwvbGk+XG5cdHsvZWFjaH1cbjwvdWw+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQyxFQUFFLGVBQUMsQ0FBQyxBQUNILE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2pCLFdBQVcsQ0FBRSxHQUFHLEFBQ2pCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (37:1) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*post*/ ctx[3].title + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", {});
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { rel: true, href: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, t_value);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value = "blog/" + /*post*/ ctx[3].slug);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 41, 6, 846);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 41, 2, 842);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*post*/ ctx[3].title + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[3].slug)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(li);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(37:1) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let button;
	let t3;
	let t4;
	let ul;
	let mounted;
	let dispose;
	let each_value = /*posts*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Recent posts");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Click me");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-hfp9t8\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Recent posts");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", {});
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "Click me");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "UL", { class: true });
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 33, 0, 500);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 34, 0, 522);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(ul, "class", "svelte-1frg2tf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 35, 0, 596);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", /*click_handler*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t4);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;

	let { test = () => {
		console.log("hello test");

		this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			console.log({ posts });
		});
	} } = $$props;

	const writable_props = ["posts", "test"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Blog", $$slots, []);

	const click_handler = () => {
		console.log("test");
		test();
	};

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("test" in $$props) $$invalidate(1, test = $$props.test);
	};

	$$self.$capture_state = () => ({ preload, posts, test });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("test" in $$props) $$invalidate(1, test = $$props.test);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, test, click_handler];
}

class Blog extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1frg2tf-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { posts: 0, test: 1 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console_1.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get test() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set test(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Jsb2cvaW5kZXguc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkF5Q2lELEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFBdkIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7OERBQUksR0FBSSxJQUFDLEtBQUs7O2tGQUF2QixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFMckMsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW5DVSxPQUFPLEdBQUUsTUFBTSxFQUFHLEtBQUs7UUFDL0IsSUFBSSxDQUFDLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUs7V0FDbkQsS0FBSzs7Ozs7T0FNTCxLQUFLOztPQUVMLElBQUk7RUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7O0VBRXhCLElBQUksQ0FBQyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO0dBRXJELE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7RUFrQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO0VBQUUsSUFBSSIsImZpbGUiOiI0YWI1ZGQ4YjViYjM3MTE5NDMyYi9ibG9nLmJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoe3BhcmFtcyAsIHF1ZXJ5fSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgcG9zdHMgfTtcblx0XHR9KTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgcG9zdHM7XG5cblx0ZXhwb3J0IGxldCB0ZXN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdoZWxsbyB0ZXN0Jylcblx0XHRcblx0XHR0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocG9zdHMgPT4ge1xuXHRcdFx0XG5cdFx0XHRjb25zb2xlLmxvZyh7IHBvc3RzIH0pXG5cdFx0fSk7XG5cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0dWwge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPlJlY2VudCBwb3N0czwvaDE+XG48YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiB7Y29uc29sZS5sb2coJ3Rlc3QnKTt0ZXN0KCk7fX0+IENsaWNrIG1lPC9idXR0b24+XG48dWw+XG5cdHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuXHRcdDwhLS0gd2UncmUgdXNpbmcgdGhlIG5vbi1zdGFuZGFyZCBgcmVsPXByZWZldGNoYCBhdHRyaWJ1dGUgdG9cblx0XHRcdFx0dGVsbCBTYXBwZXIgdG8gbG9hZCB0aGUgZGF0YSBmb3IgdGhlIHBhZ2UgYXMgc29vbiBhc1xuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXG5cdFx0XHRcdHdhaXRpbmcgZm9yIHRoZSAnY2xpY2snIGV2ZW50IC0tPlxuXHRcdDxsaT48YSByZWw9J3ByZWZldGNoJyBocmVmPSdibG9nL3twb3N0LnNsdWd9Jz57cG9zdC50aXRsZX08L2E+PC9saT5cblx0ey9lYWNofVxuPC91bD4iXSwic291cmNlUm9vdCI6IiJ9