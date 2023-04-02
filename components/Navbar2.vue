<script setup>
import { ref } from 'vue'

const email = ref('');
const password = ref('');
const modalOpen = ref(false);
const loading = ref(false);
const rememberMe = ref(false);
const profileImgageUrl = ref('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg');
const emailCookie = useCookie('email')

const { user, hasLogin, check, login, logout } = useAuth()

onMounted(() => {
	check()
	email.value = emailCookie.value
})

onUpdated(() => {
	if (rememberMe.value) {
		emailCookie.value = email.value
	} else {
		emailCookie.value = ''
	}
})

const loginSumit = async () => {
	loading.value = true
	const res = await login({
		email: email.value,
		password: password.value
	});
	if (res.status = 'success') {
		email.value = ''
		password.value = ''
		modalOpen.value = false
		loading.value = false
	}
}

</script>

<template>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
				</label>
				<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					<li><a>Homepage</a></li>
					<li><a>Portfolio</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="navbar-end">
			<button class="btn btn-ghost btn-circle">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
			</button>

			<!-- 로그인 후 -->
			<div v-if="hasLogin">
				<span class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
							<span class="badge badge-xs badge-primary indicator-item"></span>
						</div>
					</label>
					<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</span>
				<span class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img :src="profileImgageUrl" />
						</div>
					</label>
					<ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52" v-if="hasLogin">
						<li>
							<a class="justify-between">
								{{ user.name }}
								<span class="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a @click="logout">Logout</a></li>
					</ul>
				</span>
			</div>

			<!-- 로그인 전 -->
			<div v-else>
				<ul class="menu menu-horizontal px-1">
					<li><a>회원가입</a></li>
					<li><label for="my-modal-3" class="btn btn-outline">로그인</label></li>
				</ul>
			</div>

		</div>

		<!-- 로그인 창 -->
		<input type="checkbox" id="my-modal-3" class="modal-toggle" v-model="modalOpen" />
		<div class="modal">
			<div class="modal-box relative">
				<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
				<div class="card-body">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Email</span>
						</label>
						<input type="text" placeholder="email" class="input input-bordered" v-model="email" />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Password</span>
						</label>
						<input type="text" placeholder="password" class="input input-bordered" v-model="password" />
						<label class="label cursor-pointer">
							<span class="label-text">Remember me</span> 
							<input type="checkbox" v-model="rememberMe" class="checkbox checkbox-primary" />
						</label>
						<label class="label">
							<a href="#" class="label-text-alt link link-hover">Forgot password?</a>
						</label>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary" @click="loginSumit" :class="{'loading btn-ghost': loading}" :disabled="loading">Login</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
