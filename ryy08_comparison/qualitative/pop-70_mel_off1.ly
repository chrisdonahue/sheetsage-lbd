#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*144
    }
}

\new Staff { 
    {
        \clef treble
        \key d \major
        \time 4/4
        
        d'4~ d'8. a''8. r8. fis''16 r16 ais16 | b8 d''16 r16 a''8 e''16 fis''4 r16 d''16 cis''8 r16 | d'4~ d'8. r16 cis''4 d''8. e''16 | d''16 g'4 r16 d'4. r4 | d'4 r8 a'4~ a'8. ais'16 a'8~ | a'16 r2~ r8. b'8 cis''8 | d''16 r2~ r16 d''8 r4~ | r1 | e''4 fis''16 r16 fis''4~ fis''16 r16 e''8. r16
    }
}

>>

\version "2.18.2"