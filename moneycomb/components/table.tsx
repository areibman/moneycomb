/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/sAZNkx51Cnh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.5rem;
}
**/
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function Catalog() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
          Military Equipment Catalog
        </h1>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                size="sm"
                variant="outline"
              >
                Sort
                <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8}>
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="price">
                <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="vendor">Vendor</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="restrictions">Restrictions</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <Table className="rounded-lg" >
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Restrictions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  alt="Product Image"
                  className="aspect-square object-cover rounded-md"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
              </TableCell>
              <TableCell>
                <h3 className="text-xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">Tactical Vest</h3>
              </TableCell>
              <TableCell>
                <p className="text-[#6c8095] dark:text-[#9cb0d0]">Acme Tactical Gear</p>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">$499.99</span>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 rounded-full bg-[#4c6085] text-white dark:bg-[#2c3b55] dark:text-white"
                  variant="outline"
                >
                  Yes
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                  size="sm"
                  variant="outline"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product Image"
                  className="aspect-square object-cover rounded-md"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
              </TableCell>
              <TableCell>
                <h3 className="text-xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">Kevlar Helmet</h3>
              </TableCell>
              <TableCell>
                <p className="text-[#6c8095] dark:text-[#9cb0d0]">Tactical Gear Inc</p>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">$299.99</span>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 rounded-full bg-[#4c6085] text-white dark:bg-[#2c3b55] dark:text-white"
                  variant="outline"
                >
                  No
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                  size="sm"
                  variant="outline"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product Image"
                  className="aspect-square object-cover rounded-md"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
              </TableCell>
              <TableCell>
                <h3 className="text-xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">Tactical Boots</h3>
              </TableCell>
              <TableCell>
                <p className="text-[#6c8095] dark:text-[#9cb0d0]">Gear Ops</p>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">$149.99</span>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 rounded-full bg-[#4c6085] text-white dark:bg-[#2c3b55] dark:text-white"
                  variant="outline"
                >
                  Yes
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                  size="sm"
                  variant="outline"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product Image"
                  className="aspect-square object-cover rounded-md"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
              </TableCell>
              <TableCell>
                <h3 className="text-xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">Tactical Gloves</h3>
              </TableCell>
              <TableCell>
                <p className="text-[#6c8095] dark:text-[#9cb0d0]">Gear Ops</p>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">$49.99</span>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 rounded-full bg-[#4c6085] text-white dark:bg-[#2c3b55] dark:text-white"
                  variant="outline"
                >
                  No
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                  size="sm"
                  variant="outline"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product Image"
                  className="aspect-square object-cover rounded-md"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
              </TableCell>
              <TableCell>
                <h3 className="text-xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">Tactical Backpack</h3>
              </TableCell>
              <TableCell>
                <p className="text-[#6c8095] dark:text-[#9cb0d0]">Gear Ops</p>
              </TableCell>
              <TableCell>
                <span className="text-2xl font-bold text-[#4c6085] dark:text-[#8ca0c0]">$199.99</span>
              </TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 rounded-full bg-[#4c6085] text-white dark:bg-[#2c3b55] dark:text-white"
                  variant="outline"
                >
                  Yes
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  className="bg-[#4c6085] hover:bg-[#5c7095] dark:bg-[#2c3b55] dark:hover:bg-[#3c4b65] text-white"
                  size="sm"
                  variant="outline"
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function ChevronsUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}
