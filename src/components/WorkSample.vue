<template>
	<div class="sample">
		<div class="sample__content">
			<h2 class="content__title">{{ content.title }}</h2>
			<p v-for="s in content.summary" class="content__summary">{{ s }}</p>
			<ul>
				<li v-for="c in content.contributions" class="content__contributions">{{ c }}</li>
			</ul>
			<a class="content__link" :href="content.link.url" target="_blank">{{ content.link.title }}</a>
		</div>
		<div class="sample__img">
			<img :src="content.imgPath" alt="no image" />
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['content']
	}
</script>

<style lang="sass" scoped>
	.sample {
		align-items: center;
		display: flex;
		flex-direction: row;
		min-height: calc(100vh - 60px); //TEMPORARY
		padding: 40px 0;

		.sample__content{
			box-sizing: border-box;
			flex: 2;
		}

		.sample__img {
			box-sizing: border-box;
			flex: 1;
		}

		.sample__content {
			padding: 30px 10%;
		}

		.content__title {
			color: #333;
			font-family: 'Yanone Kaffeesatz', sans-serif;
			font-size: 42px;
			line-height: .6;
			letter-spacing: 1px;
			text-transform: uppercase;
			-webkit-font-smoothing: antialiased;
		}

		.content__summary,
		.content__contributions {
			font-family: 'Lato', sans-serif;
			font-size: 18px;
		}

		.content__summary {
			line-height: 1.3;
		}

		.content__link {
			color: #0a9ddf;
			display: inline-block;
			font-family: 'Yanone Kaffeesatz', sans-serif;
			font-size: 18px;
			letter-spacing: 1px;
			margin: 0 0 0 5px;
			position: relative;
			text-decoration: none;
			text-transform: uppercase;
			z-index: 1;

			&:hover{
				color: #fff;
				&::before {
					top: -5px;
				}
			}

			&::before {
				background-color: #0a9ddf;
				bottom: -5px;
				content: '';
				left: -5px;
				right: -5px;
				top: calc(100% + 3px);
				position: absolute;
				transition: 100ms cubic-bezier(.4, 1, .8, 1.2);;
				z-index: -1;
			}
		}

		ul {
			margin: 0 0 20px;
			padding: 0;
		}

		.content__contributions {
			border: 1px solid #666;
			border-radius: 6px;
			color: #666;
			display: inline-block;
			font-size: 16px;
			list-style-type: none;
			margin: 0 10px 0 0;
			padding: 2px 6px;
			//text-transform: uppercase;


		}

		&:nth-child(even) {
			background-color: #eee;

			.sample__content {
				order: 2;
			}

			.sample__img {
				order: 1;
			}
		}
	}
</style>