import { defineConfig } from 'vite'

// GitHub project pages are served from /<repository>/, while local builds and
// user/organization pages are served from the site root.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isProjectPage = Boolean(
  process.env.GITHUB_ACTIONS && repository && !repository.endsWith('.github.io'),
)

export default defineConfig({
  base: isProjectPage ? `/${repository}/` : '/',
})
