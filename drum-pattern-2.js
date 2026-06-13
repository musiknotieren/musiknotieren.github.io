(function () {
    window.drumPatternBuilders = window.drumPatternBuilders || {};
    window.drumPatternBuilders.drum_pattern_2 = function ({ maxBeats, createNote }) {
        const events = [];
        const steps = Math.max(1, Math.round(maxBeats / 0.5));

        for (let step = 0; step < steps; step++) {
            const pos = Math.round(step * 0.5 * 1000) / 1000;
            let drums = (pos % 1 === 0) ? ['kick', 'hihat'] : ['openHihat'];

            if (Math.abs(pos - 1) < 0.001) drums.push('snare');
            if (maxBeats >= 4 && Math.abs(pos - 3) < 0.001) drums.push('snare');

            events.push(createNote([...new Set(drums)], 0.5));
        }

        return events;
    };
})();
