import { useState, useEffect } from 'react';

export const useScrollTop = () => {
	const [isVisible, setIsVisible] = useState<Boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { isVisible };
};
