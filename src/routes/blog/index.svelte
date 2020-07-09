<script context="module">
	export function preload({params , query}) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
	console.log(posts);
	export let postsClient = [];

	export let test = () => {
		fetch(`blog.json`).then(r => r.json()).then(posts => {
			postsClient =  posts ;
		});
	}
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<button on:click={test}> Click me</button>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

<h2>Test</h2>
<ul>
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

	
				{#if postsClient.length > 0}
		<li>{postsClient[0].title}</li>
{/if}

</ul>