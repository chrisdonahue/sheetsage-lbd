#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*112
    }
}

\new Staff { 
    {
        \clef treble
        \key bes \major
        \time 4/4
        
        r4~ r16 g'16 ees''8 d'4 c''4 | f'2~ f'4~ f'16 ees'8. | e''2 ges'8. g'8. a'8 | b'1~ | b'4 bes'16 bes'16 d''8 c''4 bes'4 | a'4~ a'16 c''16 d''8 f'2 | f'2 c''4 bes'4
    }
}

>>

\version "2.18.2"