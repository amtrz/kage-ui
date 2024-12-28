'use client'

import { ArrowLineRightIcon } from '@holakirr/snow-ui-icons'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Text } from '../Text/Text'

export type AccordionContentProps = HTMLProps<HTMLDivElement> & {}

const AccordionContent: FC<AccordionContentProps> = ({ ...props }) => (
  <AccordionPrimitive.Content
    className="p-4 pt-1 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
    {...props}
  />
)

type AccordionTriggerProps = AccordionPrimitive.AccordionTriggerProps & {}

const AccordionTrigger: FC<AccordionTriggerProps> = ({
  children,
  ...props
}) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      className="flex w-full rounded-xl px-4 py-2 items-center justify-between transition-all hover:bg-black/10 cursor-pointer [&[data-state=open]>svg]:rotate-90 gap-2"
      {...props}
    >
      <Text size={16}>{children}</Text>

      <ArrowLineRightIcon className="data-[state=open]:rotate-90" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {}

const AccordionItem: FC<AccordionItemProps> = (props) => (
  <AccordionPrimitive.Item {...props} />
)

type AccordionProps = (
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
) & {}

const Accordion = ({ className, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root
    role="region"
    className={twMerge('flex flex-col gap-1 text-black', className)}
    {...props}
  />
)

AccordionContent.displayName = 'AccordionContent'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionItem.displayName = 'AccordionItem'
Accordion.displayName = 'Accordion'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
