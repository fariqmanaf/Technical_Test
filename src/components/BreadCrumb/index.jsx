import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadCrumbComponent({ arrayOfBreadcrumb }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {arrayOfBreadcrumb.map((breadcrumb, index) => {
                    return (
                        <BreadcrumbItem
                            key={index}
                            className={"cursor-pointer"}
                        >
                            <BreadcrumbLink
                                className={"first-letter:uppercase"}
                            >
                                {breadcrumb}
                            </BreadcrumbLink>
                            {index !== arrayOfBreadcrumb.length - 1 && (
                                <BreadcrumbSeparator />
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
