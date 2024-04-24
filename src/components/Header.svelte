<script>
	import MenuIcon from '../assets/icons/menu.svelte';
	import AddIcon from '../assets/icons/add.svelte';
	import CloseIcon from '../assets/icons/close.svelte';
	import EditIcon from '../assets/icons/edit.svelte';
	import SearchIcon from '../assets/icons/search.svelte';

	let menuOpen = false;
	$: menuClass = menuOpen ? '' : 'translate-x-[-110%]';
	$: menuButtonClass = menuOpen ? 'rounded-b-none' : '';

	// 切换菜单打开与关闭
	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};
</script>

<header class="sticky top-0 p-2 bg-slate-200 flex items-center">
	<button
		class="border border-blue-200 p-1 rounded-md {menuButtonClass} bg-blue-200"
		on:click={toggleMenu}
	>
		<MenuIcon />
	</button>
	<h1 class="grow text-center text-lg italic">
		<a href="/"> Hina Project </a>
	</h1>
	<span class="w-[2em]"></span>
	<nav
		class="absolute top-0 left-0 w-full h-screen {menuClass}
    bg-slate-700/60 py-10 pr-10
    overflow-hidden transition-transform duration-500"
	>
		<button class="absolute right-2 top-2 bg-neutral-100 rounded-md" on:click={toggleMenu}>
			<CloseIcon />
		</button>
		<ul class="bg-blue-200 p-2 rounded-r-lg">
			<h2 class="text-lg text-center mb-2">功能</h2>
			<li class="flex items-center gap-2 bg-blue-100 rounded-md p-2 mb-2">
				<AddIcon />
				新建问卷
			</li>
			<li class="flex items-center gap-2 bg-blue-100 rounded-md p-2 mb-2">
				<EditIcon />
				编辑问卷
			</li>
			<li class="flex items-center gap-2 bg-blue-100 rounded-md p-2 mb-2">
				<SearchIcon />
				查看问卷结果
			</li>
		</ul>
	</nav>
</header>
