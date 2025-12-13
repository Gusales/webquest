"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/src/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

export function Breadcumbs(props?: { paths?: string[] }) {
    const path = usePathname()
    const segments = [...path.split('/').filter(Boolean), ...(props?.paths || [])]

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    {
                        segments.map((segment, index) => (
                                <BreadcrumbItem key={segment}>
                                    <BreadcrumbLink href={'/' + segments.slice(0, index + 1).join('/')}>
                                        {segment
                                            .split('-')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')
                                        }
                                    </BreadcrumbLink>
                                    {index < segments.length - 1 ? (<BreadcrumbSeparator />) : (<></>)}
                                </BreadcrumbItem>
                        ))
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}