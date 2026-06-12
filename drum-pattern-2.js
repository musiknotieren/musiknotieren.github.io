(function () {
    window.drumPatternBuilders = window.drumPatternBuilders || {};
    window.drumPatternBuilders.drum_pattern_2 = function ({ maxBeats, createNote }) {
        const events = [];
        const steps = Math.max(1, Math.round(maxBeats / 0.5));

        for (let step = 0; step < steps; step++) {
            const pos = Math.round(step * 0.5 * 1000) / 1000;
            let drums = [(pos % 1 === 0) ? 'ride' : 'hihat'];

            if (pos === 0) drums.push('crash', 'kick');
            if (Math.abs(pos - 1) < 0.001) drums.push('snare');
            if (maxBeats >= 4 && Math.abs(pos - 1.5) < 0.001) drums.push('kick');
            if (maxBeats >= 4 && Math.abs(pos - 2.5) < 0.001) drums.push('kick');
            if (Math.abs(pos - (maxBeats - 1)) < 0.001) drums.push(maxBeats >= 4 ? 'snare' : 'tomHigh');
            if (pos > maxBeats - 1 && pos < maxBeats - 0.001) drums.push(step % 2 === 0 ? 'tomHigh' : 'tomLow');

            events.push(createNote([...new Set(drums)], 0.5));
        }

        return events;
    };
})();
