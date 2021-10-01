#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*128
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        e''4. d''8 r2 | f''4. e''8 r8 c''16 d''16 e''8 d''16 c''16 | d''8 c''8 e''16 e''16 d''16 c''16 d''16 c''16 c''8 e''16 e''16 d''16 c''16 | c''8 c''8 r4. g'16 g'16 e''16 d''16 c''16 c''16 | e'2 d'8 e'4 f'8~ | f'4. a'8 ais'4 a'4 | e'2 d'8 e'4 f'8~ | f'2 r8 g'16 g'16 e''16 d''16 d''16 c''16
    }
}

>>

\version "2.18.2"