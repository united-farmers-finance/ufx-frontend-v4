import transpileModules from 'next-transpile-modules'
import { withAxiom } from 'next-axiom'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const withTH = transpileModules(['@unitedfarmers/uikit', '@unitedfarmers/wagmi', '@unitedfarmers/sdk', '@unitedfarmers/ui'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

export default withTH(withAxiom(withVanillaExtract(nextConfig)))
