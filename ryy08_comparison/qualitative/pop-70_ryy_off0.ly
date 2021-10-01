#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*160
    }
}

\new Staff { 
    {
        \clef treble
        \key d \major
        \time 4/4
        
        d'4~ d'8. a''8. g''8 fis''8 e''8 | d''4. e''16 fis''4~ fis''16 b'16 cis''8. | b'4. b'8 cis''4 d''8 d''16 e''16 | d''4. d'2~ d'8~ | d'2~ d'8 a'8 a'16 b'16 a'8~ | a'2. b'8 cis''8 | d''2 d''8 d''8 e''4~ | e''2~ e''4. d''8 | e''4 fis''8 fis''4. e''4 | d''16 a'2~ a'4~ a'8.
    }
}

>>

\version "2.18.2"