#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*192
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        a''4 r2 a''4 | gis''4 a''4 b''4 c'''4 | r1~ | r4 c''4 e''8 g''4. | a''2. a''4 | gis''4 e''4 d''4 c''8 c''8~ | c''4 r2.~ | r2~ r8 a'8 c''8 a'8 | f''4. e''4. c''4 | r2~ r8 a'8 c''8 a'8 | f''4. e''4. d''4 | r4 c''4 d''4 c''8 c''8
    }
}

>>

\version "2.18.2"