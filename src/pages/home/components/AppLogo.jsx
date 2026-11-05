function AppLogo({ name, src }) {
  return (
    <li className="h-[140px] w-[152px] shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="h-full w-full rounded-2xl object-contain"
      />
    </li>
  )
}

export default AppLogo
