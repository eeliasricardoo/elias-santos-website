'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X, ZoomIn } from 'lucide-react';

/**
 * Case-study image that opens at its real size. Figma boards and dashboards are
 * shrunk to fit the column, so their labels only become readable when enlarged.
 * The dialog is portalled outside `.px-root`, hence the literal colours.
 */
export function ZoomImage({ src, alt }: { src: string; alt: string }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button type="button" className="group relative block w-full cursor-zoom-in text-left" aria-label={`Enlarge image: ${alt}`}>
                    <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
                    <span
                        aria-hidden="true"
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#101216]/80 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                        <ZoomIn className="h-4 w-4" />
                    </span>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[100] bg-[#101216]/90" />
                <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-[101] overflow-auto focus:outline-none">
                    <Dialog.Title className="sr-only">{alt}</Dialog.Title>
                    {/* Real size, centred when it fits and scrollable when it doesn't. */}
                    <div className="flex min-h-full w-max min-w-full items-center justify-center p-4 sm:p-10">
                        <Dialog.Close asChild>
                            <img src={src} alt={alt} className="block h-auto max-w-none cursor-zoom-out rounded-lg bg-white" />
                        </Dialog.Close>
                    </div>
                    <Dialog.Close
                        aria-label="Close"
                        className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#101216] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
