export const Footer = (
    {children} : {children: React.ReactNode}
) => {
    return (
        <div className="z-50 bottom-0 w-full p-4 border-t bg-white/[0.6] dark:bg-black/[0.6] relative">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                {children}
            </div>
        </div>
    );
};