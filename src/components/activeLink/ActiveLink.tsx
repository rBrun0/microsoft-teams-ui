"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
    children: React.ReactNode,
    href: string
}

function ActiveLink({children, href}: ActiveLinkProps) {

    const pathname = usePathname()

    const styles = {
        marginRight: 10,
        color: pathname === href ? 'blue' : 'white',
        alignItems: "center"
      }

    return (
        <Link href={href} style={styles}>{children}</Link>
    )
}

export default ActiveLink