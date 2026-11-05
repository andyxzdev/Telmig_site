function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'border-transparent bg-[#08acd3] text-white',
    outline: 'border-title bg-transparent text-white',
    light: 'border-transparent bg-white text-[#00a8d3]',
  }
  const classes = `inline-flex min-h-[30px] min-w-[158px] cursor-pointer items-center justify-center whitespace-nowrap rounded-xl border px-3.5 py-1.5 text-[13px] font-bold leading-[1.25] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-title ${variants[variant]} ${className}`.trim()

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }

  return <button className={classes} type="button" {...props}>{children}</button>
}

export default Button
