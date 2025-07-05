import React from 'react'

const github_username = 'hariwhois23'
// const discord_usertag = 'HaiseSasaki#7599'
// const discord_userid = '755109987474473059'
const email = 'prasahari@proton.me'


// TO list out the projects
const projects = [
	'hariwhois23/2048_WebDeployment',
	'hariwhois23/DevSecOps-Project-01',
	'hariwhois23/RPi-Pico-WeatherStation',
	'hariwhois23/StockValuePredicting-DL',

]


const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/hariwhois23',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://prasath.live',
		description: 'Personal site',
	},

	// {
	// 	name: 'Discord',
	// 	link: `https://discord.com/users/${discord_userid}`,
	// 	icon: 'fab fa-fw fa-discord',
	// 	description: `${discord_usertag} | Add me as friend!`,
	// },
	{
		name: 'LinkedIn',
		icon: 'fas fa-fw fa-info',
		link: 'https://www.linkedin.com/in/h44i/',
		description: 'My LinkedIn profile.',
	},

	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},

	
]

const info = (
	<>
	<p>Hey there! I'm a Cloud Engineer who loves all things DevOps and automation.</p>
	<p>
		I'm pretty comfortable working with{' '}
		<span className="highlighted">AWS</span>,{' '}
		<span className="highlighted"> Python, JS</span>, and 
				<span className="highlighted"> Containers.</span>
	</p>
	<p>
		I've been building{' '}
		<span className="highlighted">CI/CD pipelines</span> using{' '}
		<span className="highlighted">Jenkins</span> and{' '}
		<span className="highlighted">GitHub Actions</span> to make things run smoother.
	</p>
	<p>
		Right now, I'm diving deeper into{' '}
		<span className="highlighted">Terraform</span>,{' '}
		<span className="highlighted">Ansible</span>, and scaling apps with{' '}
		<span className="highlighted">Kubernetes</span>.
	</p>
	<p>
		When I’m not geeking out over tech, you’ll find me watching{' '}
		<span className="highlighted">F1</span>, rooting for{' '}
		<span className="highlighted">Lewis Hamilton</span>
	</p>
</>

)

export {
	github_username,
	// discord_usertag,
	// discord_userid,
	email,
	projects,
	links,
	info,
}
