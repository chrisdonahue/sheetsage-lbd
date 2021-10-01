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
        
        e''4. d''2~ d''8 | f''4 f''8 e''4. e''8 c''8 | c''8 c''8 e''8 d''8 c''8 c''8 e''8 c''8 | c''8 c''2~ c''8 e''8 c''8~ | c''2 d''2~ | d''2. g'4 | e''2 d''2~ | d''2. d''4
    }
}

>>

\version "2.18.2"